from django.shortcuts import render
from django.views.generic import TemplateView,View
from django.http import JsonResponse
from django.core import serializers
from .models import Picture

# Create your views here.
class HomeView(TemplateView):
    template_name = 'posts/main.html'
    
class PictureView(View):
    def get(self,request):
        qs = Picture.objects.all()
        data = serializers.serialize('json',qs)
        return JsonResponse({'data':data},safe=False)
    
    
    