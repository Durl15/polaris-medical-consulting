export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-brand-darkblue mb-12">About Dr. Johnson</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="md:col-span-1">
          <img 
            src="/images/dr-johnson.jpg" 
            alt="Dr. Sarah Johnson" 
            className="rounded-lg shadow-xl w-full border-4 border-brand-teal"
          />
        </div>
        
        <div className="md:col-span-2 space-y-6 text-gray-800">
          <p className="text-lg leading-relaxed">
            Dr. Sarah Johnson brings years of experience and a unique background to the practice of occupational medicine. Her training began with obtaining her undergraduate degree at Johns Hopkins University followed by a three-year service commitment with Teach For America in Chicago Public Schools where she taught high school English on the South Side. After completing her teaching commitment in 2009, she attended the University of Illinois at Chicago where she obtained her medical degree.
          </p>
          
          <p className="text-lg leading-relaxed">
            Dr. Johnson went on to complete two years of general surgery residency where she learned to manage a wide range of patients from those needing simple outpatient procedures to those requiring complex care in the surgical intensive care unit (SICU). She then obtained certification as a Medical Review Officer (MRO) in 2015 and worked for First Advantage, a national employment screening firm, helping to operate their drug screening division. Her work as an MRO exposed her to the world of occupational medicine and the many complex medical issues that can arise in the workplace. To further her training, Dr. Johnson moved to the Bay Area in 2018 to matriculate at the University of California at San Francisco where she completed her residency in Occupational and Environmental Medicine.
          </p>
          
          <p className="text-lg leading-relaxed">
            As her residency was concluding, the COVID-19 pandemic was just beginning. For her first job after residency, she worked as an Associate Medical Director for WorkCare where she managed COVID-19 compliance for several large clients including multiple TV and film studios. Her role of advising entertainment clients was a natural fit as Dr. Johnson has a long-standing interest in creative work and ran two film festivals while in college. During the pandemic, she developed skills in managing infectious diseases; implementing policies to ensure medicolegal compliance; and communicating with executives, employees, and government agencies alike. She also had the rare opportunity to learn about the unique challenges facing entertainment workplaces. In addition to working with entertainment clients, Dr. Johnson advised companies in a variety of other industries including power, mining, and manufacturing. She also continued her work as an MRO managing drug screening programs for a host of clients.
          </p>
          
          <p className="text-lg leading-relaxed">
            After spending four years at WorkCare, Dr. Johnson transitioned to her current role as founder and Chief Executive Officer of Polaris Medical Consulting, an occupational medicine firm where she utilizes her unique expertise to provide consulting and clinical services across multiple industries.
          </p>
        </div>
      </div>
    </div>
  )
}
