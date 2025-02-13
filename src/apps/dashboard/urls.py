from django.urls import include, path, re_path

urlpatterns = [
    path('', include('dashboard.contrib.analytics.urls')),
    path('tables/', include('dashboard.contrib.tables.urls')),
    path('order/', include('dashboard.contrib.order.urls')),
    path('dish/', include('dashboard.contrib.dish.urls')),
]