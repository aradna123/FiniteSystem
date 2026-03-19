import IndustryPage from './IndustryPage'

const CommercialEnterprises = () => {
  return (
    <IndustryPage
      title="Commercial Enterprises"
      icon="🏢"
      description="Scalable technology solutions for commercial enterprises to drive growth, efficiency, and competitive advantage."
      features={[
        { title: 'Enterprise Software', description: 'Custom enterprise applications tailored to your business processes and workflows.' },
        { title: 'CRM Solutions', description: 'Customer relationship management systems to enhance sales and retention.' },
        { title: 'ERP Integration', description: 'Enterprise resource planning solutions for unified business operations.' },
        { title: 'Business Intelligence', description: 'Data-driven insights and reporting to support strategic decision-making.' },
        { title: 'Process Automation', description: 'Streamline operations with intelligent automation across departments.' },
        { title: 'Digital Transformation', description: 'End-to-end digital transformation strategies to modernize your business.' },
      ]}
    />
  )
}

export default CommercialEnterprises
