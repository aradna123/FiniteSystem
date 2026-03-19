import IndustryPage from './IndustryPage'

const LawPractice = () => {
  return (
    <IndustryPage
      title="Law Practice"
      icon="⚖️"
      description="Technology solutions designed for law firms to manage cases, clients, and documents with efficiency and security."
      features={[
        { title: 'Case Management Systems', description: 'Comprehensive tools to track cases, deadlines, and client communications.' },
        { title: 'Legal Document Automation', description: 'Automate document creation, review, and management for faster turnaround.' },
        { title: 'Client Portal', description: 'Secure portals for clients to access case updates and share documents.' },
        { title: 'Billing & Time Tracking', description: 'Accurate time tracking and invoicing solutions built for legal workflows.' },
        { title: 'Compliance & Security', description: 'Data protection and compliance solutions to safeguard sensitive legal information.' },
        { title: 'E-Discovery Solutions', description: 'Digital tools to streamline the discovery process and manage large datasets.' },
      ]}
    />
  )
}

export default LawPractice
