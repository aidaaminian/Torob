from rest_framework import serializers

from Torob.models import Product, Complaint


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'

    def create(self, validated_data):
        comp = Complaint.objects.create(**validated_data)
        comp.save()
        return comp
