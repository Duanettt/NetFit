from rest_framework import serializers
from api.models import UserProfile
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = UserProfile.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        ) 
        # When using a create method we need to specify the specific 
        # parameters that we want to hash the TokenObtainPairView specifically
        # has a hash function for each parameter we specify.
        return user

        

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    username = serializers.CharField(required=True, allow_blank=True)
    password = serializers.CharField(required=True, write_only=True)
    
    def get_token(cls, user):
        token = super().get_token(user)

        # Embedded in our Token
        token['email'] = user.email
        token['username'] = user.username

        return token
    

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        username = attrs.get('username')

        if email and password:
            try:
                user = UserProfile.objects.get(email=email)
                print(user.is_active)
                print(user.password)
                if  user.check_password(password): # Checks the user submitted password and adds the username to our generate token.
                    attrs['username'] = user.username
                    print("Added username")
                else:
                    raise serializers.ValidationError('Incorrect credentials')
            except UserProfile.DoesNotExist:
                raise serializers.ValidationError("Please create an account, this email is not registered.")
            
        elif username and password:
            try:
                user = UserProfile.objects.get(username=username)
                if user.check_password(password):
                    attrs['username'] = user.username
                else:
                    raise serializers.ValidationError('Incorrect credentials')
            except UserProfile.DoesNotExist:
                raise serializers.ValidationError("Please create an account, this email is not registered.")
        else:
            raise serializers.ValidationError("Please submit either a username, email and a password.")
        
        return super().validate(attrs) # This calls the parent classes validate for extra validation on the data.
    
    # Once the validate method for our TokenObtainPairSerializer finishes it generates our token
                
