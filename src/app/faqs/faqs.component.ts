import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})

export class FAQsComponent    {
  
    aa=false
   faqs = [
    {
      id: 0,
      question: 'What products does HassanTech Supply offer as a supplier?',
      show: false,
      answer: 'HassanTech Supply offers a wide range of computer accessories including mechanical and membrane keyboards, ergonomic and gaming mice, LED and 4K monitors, HDMI and USB cables, external SSDs and HDDs, and various other peripherals such as webcams, headsets, and docking stations.'
    },
    {
      id: 1,
      question: 'What is the minimum order quantity for HassanTech Supply products?',
      show: false,
      answer: 'The minimum order quantity for HassanTech Supply products varies by item. For example, the minimum order quantity for keyboards and mice is typically 50 units, while for cables it may be 100 units. Please refer to the specific product page or contact our sales team for exact details.'
    },
    {
      id: 2,
      question: 'What kind of payments does HassanTech Supply accept?',
      show: false,
      answer: 'We accept various payment methods including major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, bank transfers, and corporate purchase orders. For large orders, we also offer payment terms upon approval.'
    },
    {
      id: 3,
      question: 'What countries does HassanTech Supply export to?',
      show: false,
      answer: 'HassanTech Supply exports to over 50 countries worldwide including the United States, Canada, United Kingdom, Germany, Australia, India, Japan, and many more. For a comprehensive list of countries and any specific shipping restrictions, please visit our shipping information page.'
    },
    {
      id: 4,
      question: 'How can I obtain free samples of the products?',
      show: false,
      answer: 'To obtain free samples of our products, please contact our sales team at sales@hassantech.com with your company details and the products you are interested in. Sample availability may depend on the product and the potential order volume.'
    },
    {
      id: 5,
      question: 'Is it possible to customize the packaging for orders of a certain amount?',
      show: false,
      answer: 'Yes, we offer customized packaging options for bulk orders. For orders of 500 units or more, we can provide packaging with your company’s branding and logo. Please contact us to discuss your specific packaging needs.'
    },
    {
      id: 6,
      question: 'What is white labeling and does HassanTech Supply offer it?',
      show: false,
      answer: 'White labeling allows you to sell our products under your own brand name. HassanTech Supply offers white labeling services for select products including keyboards, mice, and cables. Please contact our sales team to learn more about our white labeling options and requirements.'
    },
    {
      id: 7,
      question: 'How to confirm the product quality before placing orders?',
      show: false,
      answer: 'You can confirm product quality by requesting samples, reviewing our detailed product specifications, and reading customer reviews. Additionally, we provide quality assurance reports and certificates upon request. For large orders, we can arrange for factory visits and third-party inspections.'
    },
    {
      id: 8,
      question: 'What\'s the expected delivery lead time for orders?',
      show: false,
      answer: 'The delivery lead time varies based on the product and order size. Generally, orders are processed and shipped within 3-7 business days for in-stock items. Custom or bulk orders may take 2-4 weeks to process. International shipping times range from 7-21 days depending on the destination.'
    },
    {
      id: 9,
      question: 'Does HassanTech Supply offer any discounts on its products?',
      show: false,
      answer: 'Yes, we offer volume discounts on bulk orders. For example, orders of 100 units or more may receive a 5% discount, and orders of 500 units or more may receive a 10% discount. Please check our website or contact our sales team for current promotions and discount details.'
    },
    {
      id: 10,
      question: 'Are there any exclusive discounts available for first-time customers at HassanTech Supply?',
      show: false,
      answer: 'Yes, first-time customers can enjoy a 10% discount on their initial purchase. To avail this discount, sign up for our newsletter or contact our customer service team before placing your order.'
    },
    {
      id: 11,
      question: 'How does HassanTech Supply treat quality complaints?',
      show: false,
      answer: 'We take quality complaints very seriously. If you experience any issues with our products, please contact our customer service team immediately at support@hassantech.com. We will investigate the issue and offer a resolution, which may include a replacement, refund, or technical support.'
    },
    {
      id: 12,
      question: 'Can specific certificates be provided for the products supplied by HassanTech Supply?',
      show: false,
      answer: 'Yes, we can provide various certificates such as RoHS, CE, FCC, and ISO for our products. Please specify your certification requirements when placing an order, and we will ensure the appropriate documentation is included.'
    },
    {
      id: 13,
      question: 'What kind of packaging does HassanTech Supply provide?',
      show: false,
      answer: 'Our products are packaged securely to prevent damage during shipping. Standard packaging includes protective bubble wrap, sturdy boxes, and anti-static bags where necessary. For bulk orders, we also offer palletization and custom packaging options.'
    },
    {
      id: 14,
      question: 'What quality control measures are taken in order to ensure that all products provided by HassanTech Supply are reliable?',
      show: false,
      answer: 'We have a stringent quality control process that includes multiple testing phases. These include raw material inspection, in-process quality checks, and final product testing. Our QC team ensures all products meet industry standards and our high-quality benchmarks before shipping.'
    },
    {
      id: 15,
      question: 'What sets HassanTech Supply apart from other computer accessory providers?',
      show: false,
      answer: 'HassanTech Supply stands out due to our commitment to quality, competitive pricing, excellent customer service, and extensive range of customizable options. Our dedicated R&D team continuously innovates to bring the latest technology and trends to our customers.'
    },
    {
      id: 16,
      question: 'What is the process of ensuring the quality and safety of HassanTech Supply\'s products for export?',
      show: false,
      answer: 'We comply with international standards and regulations, conduct thorough product testing, and provide all necessary documentation such as export licenses and compliance certificates. Our logistics team ensures safe and secure packaging for international shipments.'
    },
    {
      id: 17,
      question: 'How successful has HassanTech Supply been in introducing its products globally?',
      show: false,
      answer: 'HassanTech Supply has successfully established a global presence with satisfied customers in over 50 countries. Our high-quality products and reliable service have made us a trusted name in the industry, with significant market share in North America, Europe, and Asia.'
    },
    {
      id: 18,
      question: 'Are there any seasonal or limited edition products offered by HassanTech Supply?',
      show: false,
      answer: 'Yes, we occasionally offer seasonal or limited edition products such as holiday-themed accessories or exclusive color variants. To stay informed about these special offerings, subscribe to our newsletter or follow us on social media.'
    },
    {
      id: 19,
      question: 'How does HassanTech Supply stay up-to-date with the latest industry trends and consumer demands?',
      show: false,
      answer: 'We stay up-to-date by conducting market research, attending industry trade shows, and gathering continuous feedback from our customers. Our R&D team also works closely with industry experts to incorporate the latest technologies and trends into our product offerings.'
    },
    {
      id: 20,
      question: 'Does HassanTech Supply have a customer loyalty program or rewards system in place?',
      show: false,
      answer: 'Yes, we have a customer loyalty program that rewards repeat customers with discounts, early access to new products, and special promotions. Members can earn points with each purchase, which can be redeemed for discounts or exclusive products.'
    },
    {
      id: 21,
      question: 'How can customers provide feedback or suggestions to HassanTech Supply?',
      show: false,
      answer: 'We welcome your feedback and suggestions. You can contact us via our website contact form, email us at feedback@hassantech.com, or reach out through our social media channels. Your input helps us improve our products and services.',
    }
  ];
  shows=false
  
show(id:number){
  this.faqs.at(id)!.show=!this.faqs.at(id)!.show
  this.faqs.forEach(e  => {
    if(e.id!=id){
      e.show=false
     
    } 


  });
}

}
