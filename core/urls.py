from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('website.urls')),  # ← هذا يخلي الرابط الأساسي يفتح تطبيقك
]

