from django.shortcuts import render, HttpResponse, redirect
from .models import Project

# Create your views here.
# def projectFormat(project):
#     name = project.name
#     url = project.url
#     screenshot1 = project.screenshot1
#     try:
#         screenshot2 = project.screenshot2.url
#         screenshot3 = project.screenshot3
#     except:
#         screenshot3 = 'none'
#         screenshot2 = 'none'
#     description = project.description
#     language1 = project.language1
#     try:
#         language3 = project.language3
#         language2 = project.language2
#     except:
#         language2 = 'none'
#         language3 = 'none'
#     data = {
#         'name': name,
#         'url': url,
#         'screenshot1': screenshot1,
#         'screenshot2': screenshot2,
#         'screenshot3': screenshot3,
#         'description': description,
#         'language1': language1,
#         'language2': language2,
#         'language3': language3
#     }
#     print data
#     print '****************************'
#     print data['screenshot1'].url
#     return data

def index(request):
    return render(request, 'portfolioApp/index.html')

def about(request):
    return render(request, 'portfolioApp/about.html')

def contact(request):
    return render(request, 'portfolioApp/contact.html')

def work(request):
    projects = Project.objects.all()
    # print projects
    # project_list = []
    # for project in projects:
    #     data = projectFormat(project)
    #     project_list.append(data)
    context = {
        'projects': projects
    }
    return render(request, 'portfolioApp/work.html', context)
