import React from 'react'

const departments = [
  {
    title: 'ENT Center',
    description:
      'Deals with conditions of the ear, nose, and throat (ENT) and related structures of the head and neck.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Traumatology',
    description:
      'Injuries caused by accidents or violence to a person, and the surgical therapy and repair of the damage.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.318H4.765c-1.718 0-2.3-2.086-1.067-3.318L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: 'Ophthalmology',
    description:
      'The branch of medicine that deals with the anatomy, physiology and diseases of the eyeball.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Cardiology',
    description:
      'Congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: 'Laboratory',
    description:
      'Tests are done on clinical specimens in order to obtain information about the health of a patient.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: 'Dentistry',
    description:
      'The oral mucosa, and of adjacent and related structures and tissues, particularly in the maxillofacial area.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
  },
]

const OurDepartments = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Departments
        </h2>

        {/* Main content: image + grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-12">
          {/* Doctor image - left */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Doctor"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Departments grid - right */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="flex flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
              >
                <div className="mb-3 text-emerald-500">{dept.icon}</div>
                <h3 className="text-base font-bold text-gray-900 sm:text-lg">{dept.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating book button - right edge */}
      <button
        type="button"
        className="fixed right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-red-500 text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 md:right-6"
        aria-label="Book or resources"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      </button>
    </section>
  )
}

export default OurDepartments




