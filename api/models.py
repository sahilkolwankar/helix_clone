from django.db import models

# Create your models here.

class Question(models.Model):
    title = models.TextField()
    body = models.TextField()
    # Timestamp for when last modified
    updated = models.DateTimeField(auto_now=True)
    # Timestamp for when created
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title[0:50]