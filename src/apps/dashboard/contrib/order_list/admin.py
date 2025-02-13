from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import OrderList

@admin.register(OrderList)
class OrderListAdmin(admin.ModelAdmin):
    list_display = ('dish_name', 'dish_status', 'dish_total', 'created_at', 'updated_at')
    list_display_links = ('dish_name',)
    list_filter = ('dish_status', 'created_at', 'updated_at', 'dish_status')
    search_fields = ('dish_name',)
    ordering = ('-created_at',)
    list_editable = ('dish_status', 'dish_total')

    fieldsets = (
        (_('Dish Information'), {
            'fields': ('dish_name', 'dish_total', 'dish_status')
        }),
        (_('Description'), {
            'fields': ('description',),
            'classes': ('collapse',)
        }),
        (_('Timestamps'), {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    readonly_fields = ('created_at', 'updated_at')
