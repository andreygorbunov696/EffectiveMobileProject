from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import Dish

@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'total', 'created_at', 'updated_at')
    list_display_links = ('name',)
    list_filter = ('is_active', 'created_at', 'updated_at')
    search_fields = ('name',)
    ordering = ('-created_at',)
    list_editable = ('is_active', 'total')

    fieldsets = (
        (_('Dish Information'), {
            'fields': ('name', 'total', 'is_active')
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
