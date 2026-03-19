import IndustryPage from './IndustryPage'

const Healthcare = () => {
  return (
    <IndustryPage
      title="Healthcare"
      icon="🏥"
      description="Innovative healthcare technology solutions to improve patient care, streamline operations, and ensure compliance."
      features={[
        { title: 'Patient Management Systems', description: 'Comprehensive systems for managing patient records, appointments, and billing.' },
        { title: 'Telehealth Solutions', description: 'Virtual consultation platforms to extend healthcare access to remote patients.' },
        { title: 'HIPAA Compliance', description: 'Ensure all systems and processes meet healthcare regulatory requirements.' },
        { title: 'Medical Data Analytics', description: 'Advanced analytics to identify trends and improve patient outcomes.' },
        { title: 'EHR Integration', description: 'Seamless integration with electronic health record systems.' },
        { title: 'Healthcare Mobile Apps', description: 'Patient-facing mobile applications for appointments, prescriptions, and health tracking.' },
      ]}
    />
  )
}

export default Healthcare
