# Generated by Django 4.1 on 2022-08-12 23:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('business_num', models.IntegerField(null=True, unique=True)),
                ('name', models.CharField(max_length=10)),
                ('nickname', models.CharField(max_length=10, unique=True)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('tel', models.CharField(max_length=40)),
                ('address', models.CharField(max_length=300, null=True)),
                ('is_business', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tax', models.CharField(max_length=30)),
                ('businessNum', models.IntegerField()),
                ('type', models.CharField(max_length=50)),
                ('bsName', models.CharField(max_length=100)),
                ('repName', models.CharField(max_length=12)),
                ('birth', models.IntegerField()),
                ('phoneNum', models.IntegerField()),
                ('address', models.TextField()),
                ('registeration', models.ImageField(upload_to='')),
                ('report', models.ImageField(upload_to='')),
            ],
        ),
    ]
