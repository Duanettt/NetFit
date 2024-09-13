from django.contrib import admin
from .models import UserProfile
from .models import UserWorkouts
from .models import UserImages

# Register your models here.


admin.site.register(UserProfile)
admin.site.register(UserWorkouts)
admin.site.register(UserImages)