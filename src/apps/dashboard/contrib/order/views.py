from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView

# Create your views here.

class OrderView(TemplateView):
    
    template_name = 'order/order.html'
