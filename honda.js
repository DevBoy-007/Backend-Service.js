const { submit_Car, check } = require("../Model/honda"); // Honda service
const { display_Car } = require("../Model/honda");
const { update_Car } = require("../Model/honda");
const { delete_Car } = require("../Model/honda");
module.exports = {
  submit_Car: async (body) => {
    try {
      const checking = await check(body.Vin);
      if (checking.response == body.Vin) {
        return {
          response: " this Honda Variant has already exist ",
        };
      }
      const submitresponse = await submit_Car(body);
      if (submitresponse.error) {
        return {
          error: submitresponse.error,
        };
      }
      return {
        response: submitresponse.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  display_Car: async () => {
    try {
      const displayresponse = await display_Car();
      if (displayresponse.error) {
        return {
          response: displayresponse.error,
        };
      }
      return {
        response: displayresponse.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  update_Car: async (body) => {
    console.log(body);
    try {
      const updateresponse = await update_Car(body);
      if (updateresponse.error) {
        return {
          error: updateresponse.error,
        };
      }
      return {
        response: updateresponse.response,
      };
    } catch (error) {
      return {
        error: "service",
      };
    }
  },
  delete_Car: async (query) => {
    try {
      const deleteresponse = await delete_Car(query.Vin);
      if (deleteresponse.error) {
        return {
          error: deleteresponse.error,
        };
      }
      return {
        response: deleteresponse.response,
      };
    } catch (error) {
      return {
        error: "service",
      };
    }
  },
};
