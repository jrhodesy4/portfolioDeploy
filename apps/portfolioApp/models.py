from __future__ import unicode_literals
from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=100)
    screenshot1 = models.ImageField(upload_to='documents/')
    screenshot2 = models.ImageField(upload_to='documents/', blank=True)
    screenshot3 = models.ImageField(upload_to='documents/', blank=True)
    description = models.TextField()
    language1 = models.CharField(max_length=100)
    language2 = models.CharField(max_length=100, blank=True)
    language3 = models.CharField(max_length=100, blank=True)
