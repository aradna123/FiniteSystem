import IndustryPage from './IndustryPage'

const Retail = () => {
  return (
    <IndustryPage
      title="Retail"
      icon="🛍️"
      description="Modern retail technology solutions to enhance customer experience, optimize inventory, and boost sales."
      features={[
        { title: 'E-Commerce Platforms', description: 'Custom online stores with seamless shopping experiences and secure payments.' },
        { title: 'Inventory Management', description: 'Real-time inventory tracking and management across multiple locations.' },
        { title: 'POS Systems', description: 'Modern point-of-sale solutions for faster checkout and better analytics.' },
        { title: 'Customer Analytics', description: 'Understand customer behavior and preferences to drive targeted marketing.' },
        { title: 'Omnichannel Solutions', description: 'Unified experience across online, mobile, and in-store channels.' },
        { title: 'Supply Chain Optimization', description: 'Streamline supply chain operations for faster delivery and reduced costs.' },
      ]}
    />
  )
}

export default Retail
