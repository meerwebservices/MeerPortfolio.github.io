<template>
  <div class="about">
    <section class="section-padding" id="about">
      <div class="container">
        <div class="section-title">
          <strong class="h4">About</strong>
          <h2>Personal <span>Details</span></h2>
        </div>
        <div class="row">
          <div class="col-lg-6 m-lg-auto align-self-center">
            <div class="about-content">
              <h3>I'm <span>Ghulam Meer Jilani</span> and a web developer</h3>
              <p>
                Specializing in front-end work with 2 years of experience. I can convert Figma, Xd, and PSD designs into responsive websites. My skills and experiences range from building responsive mobile sites that work perfectly cross-browser to developing scalable websites for various industries. I provide a 100% guarantee on the quality and reliability of my code. I am eager to continue my career by joining a hardworking and interactive team where I can expand my web development knowledge while perfecting accessibility.
              </p>
              <ul class="information">
                <li><i class="fa fa-university"></i><span>Degree:</span> HSSC</li>
                <li><i class="fa fa-envelope"></i><span>Email:</span> ghulammeerjilani@gmail.com</li>
                <li><i class="fa fa-phone"></i><span>Phone:</span>+92 323 6055044</li>
                <li><i class="fa fa-map-marker"></i><span>Location:</span> Faisalabad, Punjab, Pak</li>
              </ul>
              <button @click="downloadPDF" class="btn-style btn-1">Download Resume</button>
            </div>
          </div>
          <div class="col-lg-6 col-xl-5 m-lg-auto align-self-center">
            <div class="skills">
              <SkillsBar />
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
  components: {
    SkillsBar,
  },
  methods: {
    downloadPDF() {
      const fileUrl = process.env.BASE_URL + "Resume.pdf";
      const fileName = "Resume.pdf";

      fetch(fileUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error occurred while downloading the PDF file:", error);
          });
    },
  },
};
</script>

<style lang="scss" scoped></style>
