from django.db import models
from django.utils.translation import gettext_lazy as _

class Dish(models.Model):
    name = models.CharField(_('Dish Name'), max_length=50)
    description = models.TextField(_('Description'), blank=True, null=True)
    is_active = models.BooleanField(_('Status'), default=True)
    total = models.DecimalField(_('Total Price'), max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated At'), auto_now=True)

    class Meta:
        verbose_name = _('Dish')
        verbose_name_plural = _('Dishs')

    def __str__(self):
        return self.name
