<template>
  <section id="ContactUs">
    <div class="container">
      <div class="section-title">
        <strong class="h4">Contact Us</strong>
        <h2>Get <span>In Touch</span></h2>
      </div>
      <!-- Contact Us Form Section -->
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="contact-info">
            <h3>For Any Queries and Support</h3>
            <div class="contact-info-item" v-for="contact in contacts" :key="contact">
              <i :class="contact.icon"></i>
              <h4>{{ contact.Heading }}</h4>
              <p>{{ contact.Info }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="Name" class="d-none">Your Name</label>
                    <input
                        id="Name"
                        type="text"
                        placeholder="Your Name"
                        class="form-control"
                        v-model.trim="formData.name"
                        required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="email" class="d-none">Your Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        class="form-control"
                        v-model.trim="formData.email"
                        required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="phone" class="d-none">Your Phone No</label>
                    <input
                        id="phone"
                        type="text"
                        placeholder="Your Phone"
                        class="form-control"
                        v-model.trim="formData.phone"
                        required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="subject" class="d-none">Your Subject</label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        class="form-control"
                        v-model.trim="formData.subject"
                        required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea
                        placeholder="Your Message"
                        class="form-control"
                        v-model.trim="formData.message"
                        required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <button class="btn-style btn-1" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  components: {},
  data() {
    return {
      contacts: [
        {
          icon: "fas fa-location-arrow",
          Heading: "Address",
          Info: "Faisalabad, Punjab",
        },
        {
          icon: "fas fa-envelope",
          Heading: "Write to us at",
          Info: "ghulammeerjilani@gmail.com",
        },
        {
          icon: "fas fa-phone",
          Heading: "Call us on",
          Info: "+92 323 6055044",
        },
      ],
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        this.sendMessage();
      } else {
        console.log("Form validation failed!");
      }
    },
    validateForm() {
      const { name, email, phone, subject, message } = this.formData;
      if (!name || !email || !phone || !subject || !message) {
        return false;
      }
      return true;
    },
    sendMessage() {
      // Make HTTP POST request to the server endpoint
      fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
          .then((response) => {
            if (response.ok) {
              console.log("Email sent successfully!");
              // Reset the form data if needed
              this.formData = {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              };
            } else {
              console.error("Failed to send email.");
            }
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
    },
  },
};
</script>

<style lang="scss" scoped></style>
