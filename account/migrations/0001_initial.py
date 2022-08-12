
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BsSignupDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tax', models.CharField(max_length=30)),
                ('bsNum', models.IntegerField()),
                ('type', models.CharField(max_length=50)),
                ('bsName', models.CharField(max_length=100)),
                ('repName', models.CharField(max_length=12)),
                ('birth', models.IntegerField()),
                ('phoneNum', models.IntegerField(max_length=20)),
                ('address', models.TextField()),
                ('registeration', models.ImageField(upload_to='')),
                ('report', models.ImageField(upload_to='')),
            ],
        ),
    ]
