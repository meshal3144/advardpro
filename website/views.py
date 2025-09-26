from django.shortcuts import render

def home(request):
    return render(request, 'website/home.html')  # أو أي اسم قالب عندك
