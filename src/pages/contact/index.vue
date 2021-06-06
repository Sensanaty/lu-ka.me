<template>
  <div id="contact-wrapper">
    <div id="icons-wrapper">
      <a href="https://github.com/Sensanaty" target="_blank" rel="noopener">
        <InlineSvg src="/images/github.svg" />
      </a>
      <a href="https://linkedin.com/in/LukaSalevic" target="_blank" rel="noopener">
        <InlineSvg src="/images/linkedin.svg" />
      </a>
      <a href="mailto:salevic@lu-ka.me" target="_blank" rel="noopener">
        <InlineSvg src="/images/email.svg" />
      </a>
    </div>

    <div id="form-wrapper">
      <h1>Looking for a fullstack developer for your webapp?</h1>
      <h2>Feel free to send me a message through the form below, or through one of my socials above</h2>

      <div class="error-wrapper" v-if="errors.email || errors.message">
        <span v-show="errors.email">{{ errors.email }}</span>
        <span v-show="errors.message">{{ errors.message }}</span>
      </div>

      <form
        v-if="!sending && !sent"
        ref="form"
        name="contact-luka"
        method="post"
        data-netlify="true"
        data-netlify-bot-field="honey"
        netlify
      >
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          :class="errors.email ? 'input-error' : ''"
          name="email"
          v-model="email"
          placeholder="Your Email"
          @blur="validateEmail"
          autocomplete="off"
          required
        />

        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          :class="errors.message ? 'input-error' : ''"
          v-model="message"
          placeholder="What did you have in mind?"
          @blur="validateMessage"
          required
        />

        <button type="submit" @click.prevent="submitForm">Send</button>
      </form>

      <div id="spinner" v-show="sending">
        <InlineSvg src="/images/spinner.svg"></InlineSvg>
      </div>

      <div id="sent" v-show="sent">
        <p>Thanks! I'll get back to you soon at {{ this.email }}!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineSvg from "vue-inline-svg";

  export default {
    name: "ContactPage",
    components: {
      InlineSvg,
    },
    data() {
      return {
        email: null,
        message: null,
        errors: {
          email: null,
          message: null,
        },
        sending: false,
        sent: false,
      };
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join("&");
      },
      async submitForm() {
        this.validateEmail();
        this.validateMessage();

        if (this.email && this.message && !this.errors.email && !this.errors.message) {
          this.sending = true;
          await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: this.encode({
              "form-name": "contact-luka",
              ...this.email,
              ...this.message,
            }),
          }).then(() => {
            this.sending = false;
            this.sent = true;
          });
        }
      },
      validateEmail() {
        const emailRegex = /^\S+@\S+\.\S+$/;
        this.errors.email = null;

        if (this.email && emailRegex.test(this.email)) {
          this.errors.email = null;
        } else if (!this.email) {
          this.errors.email = "Please provide an email";
        } else if (!emailRegex.test(this.email)) {
          this.errors.email = "Are you sure the email is correct?";
        }
      },
      validateMessage() {
        if (this.message) {
          this.errors.message = null;
        } else {
          this.errors.message = "Please fill in a message";
        }
      },
    },
  };
</script>

<style lang="scss">
  #contact-wrapper {
    margin: 40px 0;
  }

  #icons-wrapper {
    background: lighten($background, 4);
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: $accent;
        height: 60%;
        transition: fill 110ms ease-in-out, transform 110ms ease-in-out;
      }

      &:hover {
        svg {
          fill: darken($accent, 10);
          transform: translateY(1px);
        }
      }
    }
  }

  #form-wrapper {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 40px;
      font-size: 4rem;
    }

    h2 {
      margin: 25px 0;
      font-size: 2rem;
    }
  }

  form {
    margin-top: 25px;
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    label {
      font-size: 2rem;
      font-weight: 500;
    }

    input,
    textarea {
      padding: 14px 15px;
      margin: 10px 0 30px 0;
      background: lighten($background, 4);
      color: $text;
      border: none;
      outline: 2px solid $background;
      transition: outline 90ms ease-in-out;
      font-weight: 500;
      line-height: 1.45;

      &:focus {
        outline: 2px solid $accent;
      }
    }

    input {
      width: 50%;
      font-size: 1.7rem;
    }

    textarea {
      width: 100%;
      min-height: 350px;
      resize: none;
      font-size: 1.45rem;
    }

    button {
      background: lighten($background, 4);
      border: none;
      padding: 10px 20px;
      font-size: 3rem;
      color: $accent;
      font-weight: bold;
      cursor: pointer;
      transition: background 110ms ease-in-out, transform 110ms ease-in-out;

      &:hover:enabled {
        background: lighten($background, 6);
      }

      &:active:enabled {
        transform: translateY(3px);
      }
    }
  }

  /* prettier-ignore */
  .input-error { outline: 2px solid red }

  .error-wrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 1.5rem;
  }

  #spinner {
    height: 150px;
    transform: rotate(360deg);
    margin-top: 25px;

    svg {
      height: 100%;
      fill: $accent;
      animation: 900ms spinner cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
    }

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  #sent {
    margin-top: 25px;
    background: lighten($background, 4);
    padding: 40px;
    font-size: 2rem;
  }
</style>
