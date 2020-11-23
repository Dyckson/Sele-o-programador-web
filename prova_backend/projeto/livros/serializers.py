from rest_framework import serializers
from .models import Livro


class LivroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Livro
        fields = ['titulo', 'autor']
