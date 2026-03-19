import IndustryPage from './IndustryPage'

const Education = () => {
  return (
    <IndustryPage
      title="Education"
      icon="🎓"
      description="Transforming education with technology solutions that enhance learning, simplify administration, and connect students."
      features={[
        { title: 'Learning Management Systems', description: 'Custom LMS platforms for online courses, assignments, and student progress tracking.' },
        { title: 'Student Information Systems', description: 'Comprehensive systems to manage enrollment, grades, and student records.' },
        { title: 'Virtual Classrooms', description: 'Interactive virtual classroom solutions for remote and hybrid learning.' },
        { title: 'Campus Management', description: 'Digital tools for managing facilities, scheduling, and campus operations.' },
        { title: 'Assessment & Testing', description: 'Online examination platforms with automated grading and analytics.' },
        { title: 'Parent & Student Portals', description: 'Portals for parents and students to access grades, attendance, and communications.' },
      ]}
    />
  )
}

export default Education
