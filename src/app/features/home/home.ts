import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
currentYear = new Date().getFullYear();

  features = [
    {
      icon: '🚗',
      title: 'Wide Selection',
      description: 'Browse thousands of verified parking spaces across major cities and localities'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Compare rates and find the most affordable parking options near your destination'
    },
    {
      icon: '🔒',
      title: 'Secure Booking',
      description: 'Your bookings and payments are protected with industry-standard security'
    },
    {
      icon: '⚡',
      title: 'Instant Confirmation',
      description: 'Book your spot in seconds and get instant confirmation via email and SMS'
    }
  ];

  howItWorks = [
    {
      step: '1',
      title: 'Search Location',
      description: 'Enter your destination city and area to discover available parking spaces'
    },
    {
      step: '2',
      title: 'Compare Options',
      description: 'View space details, amenities, pricing, and user reviews to make the best choice'
    },
    {
      step: '3',
      title: 'Book Instantly',
      description: 'Select your vehicle type, choose dates, and confirm your booking securely'
    },
    {
      step: '4',
      title: 'Park & Relax',
      description: 'Receive booking details with location and owner contact information'
    }
  ];

  customerBenefits = [
    'Search by city and locality',
    'Filter by vehicle size and budget',
    'View detailed space information',
    'Read verified user reviews',
    '24/7 customer support',
    'Flexible booking options'
  ];

  ownerBenefits = [
    'List your space for free',
    'Set your own pricing',
    'Manage bookings easily',
    'Receive monthly payments',
    'Track your earnings',
    'Insurance coverage included'
  ];
}
