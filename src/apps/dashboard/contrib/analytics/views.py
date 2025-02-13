from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView

# Create your views here.

class AnalyticsView(TemplateView):
    
    template_name = 'analytics/analytics.html'