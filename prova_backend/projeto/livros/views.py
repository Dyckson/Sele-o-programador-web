from django.shortcuts import render
from .models import Livro
from rest_framework import viewsets, permissions
from .serializers import LivroSerializer

class LivroViewSet(viewsets.ModelViewSet):
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer