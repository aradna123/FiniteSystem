import IndustryPage from './IndustryPage'

const SmallBusinesses = () => {
  return (
    <IndustryPage
      title="Small Businesses"
      icon="🏪"
      description="Affordable and effective technology solutions to help small businesses grow, compete, and succeed in the digital age."
      features={[
        { title: 'Website Development', description: 'Professional websites that establish your online presence and attract customers.' },
        { title: 'Social Media Management', description: 'Strategic social media solutions to build brand awareness and engagement.' },
        { title: 'Email Marketing', description: 'Targeted email campaigns to nurture leads and retain customers.' },
        { title: 'Accounting Solutions', description: 'Simplified accounting and bookkeeping software for small business needs.' },
        { title: 'SEO & Local Marketing', description: 'Search engine optimization to help local customers find your business.' },
        { title: 'Cloud Solutions', description: 'Cost-effective cloud tools for collaboration, storage, and productivity.' },
      ]}
    />
  )
}

export default SmallBusinesses
