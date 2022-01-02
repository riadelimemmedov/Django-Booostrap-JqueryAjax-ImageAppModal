from django.db import models

# Create your models here.
class Picture(models.Model):
    sekil = models.ImageField(upload_to='images/')
    info = models.CharField(max_length=255)
    
    def __str__(self):
        return str(self.pk)