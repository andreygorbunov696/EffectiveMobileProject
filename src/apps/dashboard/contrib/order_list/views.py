from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView

# Create your views here.

class OrderListView(TemplateView):
    
    template_name = 'order_list/order_list.html'