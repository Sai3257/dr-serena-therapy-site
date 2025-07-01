"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    voicemail: '',
    email: '',
    contactMethod: '',
    bestTime: '',
    reason: '',
    insurance: '',
    referral: '',
    consent: false, // ✅ added
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.dob.trim()) newErrors.dob = 'Date of birth is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.voicemail) newErrors.voicemail = 'Please select an option';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.contactMethod) newErrors.contactMethod = 'Please select a contact method';
    if (!formData.bestTime.trim()) newErrors.bestTime = 'Best time to call is required';
    if (!formData.reason.trim()) newErrors.reason = 'This field is required';
    if (!formData.consent) newErrors.consent = 'You must agree before submitting'; // ✅ added

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    setFormData({
      name: '',
      dob: '',
      phone: '',
      voicemail: '',
      email: '',
      contactMethod: '',
      bestTime: '',
      reason: '',
      insurance: '',
      referral: '',
      consent: false, // ✅ reset
    });

    alert('Thank you for your inquiry! I will contact you within two business days.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            New Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Consultation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-medium">
            Please complete this form and I will contact you within two business days to schedule a 15-minute consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-slide-in-left">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-gray-800">Consultation Form</CardTitle>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* All input fields */}
                <div>
                  <Label htmlFor="name">Your name *</Label>
                  <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="dob">Date of birth *</Label>
                  <Input id="dob" type="date" value={formData.dob} onChange={e => handleInputChange('dob', e.target.value)} />
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone number *</Label>
                  <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div>
                  <Label>Is it okay if I leave a voicemail? *</Label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="voicemail" value="yes" checked={formData.voicemail === 'yes'} onChange={e => handleInputChange('voicemail', e.target.value)} />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="voicemail" value="no" checked={formData.voicemail === 'no'} onChange={e => handleInputChange('voicemail', e.target.value)} />
                      No
                    </label>
                  </div>
                  {errors.voicemail && <p className="text-red-500 text-sm">{errors.voicemail}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <Label>Preferred contact method *</Label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={e => handleInputChange('contactMethod', e.target.value)} />
                      Phone
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={e => handleInputChange('contactMethod', e.target.value)} />
                      Email
                    </label>
                  </div>
                  {errors.contactMethod && <p className="text-red-500 text-sm">{errors.contactMethod}</p>}
                </div>

                <div>
                  <Label htmlFor="bestTime">Best time to call *</Label>
                  <Input id="bestTime" value={formData.bestTime} onChange={e => handleInputChange('bestTime', e.target.value)} placeholder="e.g. Mon 10am, Wed 2pm" />
                  {errors.bestTime && <p className="text-red-500 text-sm">{errors.bestTime}</p>}
                </div>

                <div>
                  <Label htmlFor="reason">What brings you to therapy? *</Label>
                  <Textarea id="reason" rows={3} value={formData.reason} onChange={e => handleInputChange('reason', e.target.value)} />
                  {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                </div>

                <div>
                  <Label htmlFor="insurance">Insurance Information</Label>
                  <Input id="insurance" value={formData.insurance} onChange={e => handleInputChange('insurance', e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="referral">Referral Source</Label>
                  <Input id="referral" value={formData.referral} onChange={e => handleInputChange('referral', e.target.value)} />
                </div>

                {/* ✅ Mandatory Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={e => handleInputChange('consent', e.target.checked)}
                    className="mt-1 accent-blue-600"
                  />
                  <Label htmlFor="consent" className="text-gray-700 font-medium">
                    I consent to be contacted regarding my consultation.
                  </Label>
                </div>
                {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all-300 hover:scale-105 shadow-glow">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
