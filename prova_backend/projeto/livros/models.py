from django.db import models

# Create your models here.
class Livro(models.Model):
    id = models.AutoField(primary_key=True, auto_created = True)
    titulo = models.CharField(max_length=50)
    autor = models.CharField(max_length=30)