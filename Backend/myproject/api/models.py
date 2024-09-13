from PIL import Image
import numpy as np
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db import models

from api.upload.utils import process_image


# Create your models here.

def validate_email_domain(value):
    valid_domains = [
        'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
        'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com',
        'mail.com', 'yandex.com'
    ]
    email_domain = value.split('@')[1]  # the split, splits the string into two parts. The 1 represents the second part.
    if email_domain not in valid_domains:
        raise ValidationError(f'{email_domain} is not a valid email domain. Please use a valid domain.')


class UserProfile(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True, validators=[validate_email_domain])
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username


class UserWorkouts(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    workoutName = models.CharField(max_length=250)
    workoutReps = models.IntegerField()
    workoutSets = models.IntegerField()

    def __str__(self):
        return self.workouts


class UserImages(models.Model):
    image = models.ImageField(upload_to="images")

    def save(self, *args, **kwargs):
        
        pillowImage = Image.open(self.image)
        openCVImage = np.array(pillowImage)
        print('converted to a numpy array object')

        processedImage = process_image(openCVImage)


