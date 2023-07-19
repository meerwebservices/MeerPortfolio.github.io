<template>
  <div class="about">
   <section class="section-padding" id="about">
     <div class="container">
           <div class="section-title">
             <strong class="h4">About</strong>
             <h2>Personal <span>Details</span></h2>
           </div>
       <div class="row">
         <div class="col-lg-6 m-lg-auto  align-self-center">
           <div class="about-content">
             <h3>
               I'm <span>Ghulam Meer Jilani</span> and web developer
             </h3>
             <p>
               Specializing in Front end work having 2 years of experience. I can convert Figma, Xd, and PSD designs to a responsive website.
               My skills and experiences range from building responsive mobile sites that work perfectly cross-browser to building scalable websites for any industry.
               I provide a 100% guarantee on the quality and reliability of the code.
               I am eager to continue my career by joining a hardworking and an interactive team where I will continue expanding my web development knowledge into perfecting accessibility.!
             </p>
             <ul class="information">
               <li> <i class="fa fa-university"></i><span>Degree:</span> HSSC</li>
               <li> <i class="fa fa-envelope"></i><span>Email:</span> ghulammeerjilani@gmail.com</li>
               <li> <i class="fa fa-phone"></i><span>Phone:</span>+92 323 6055044</li>
               <li> <i class="fa fa-map-marker"></i><span>Location:</span>Faisalabad, Punjab, Pak</li>
             </ul>
             <button @click="downloadPDF" class="btn-style btn-1">Download Resume</button>
           </div>
         </div>
         <div class="col-lg-6 col-xl-5 m-lg-auto align-self-center">
           <div class="skills">
             <SkillsBar/>
           </div>
         </div>
       </div>
     </div>
   </section>
  </div>
</template>

<script>
import SkillsBar from "@/components/SkillsBar";
export default {
  name: "AboutView",
  components: {SkillsBar},
  data() {
    return {};
  },
  methods:{
    downloadPDF() {
      // Replace 'path/to/pdf/file.pdf' with the actual path to your PDF file
      const fileUrl = 'src/assets/cv/Resume.pdf';

      // Create a temporary <a> element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Resume.pdf'; // Optional: Specify the desired filename

      // Simulate a click on the link to trigger the download
      link.click();
    }
  },
};
</script>
<style lang="scss" scoped></style>
