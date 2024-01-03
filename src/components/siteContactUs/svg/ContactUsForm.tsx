import { useState } from "react";

export interface siteFormContactUsProps {
  className: string;
}


const SiteFormContactUs: React.FC<siteFormContactUsProps> = ({
  className = "",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subjectMessage: "",
    yourInquiry: "",
  });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     subjectMessage: "",
//     yourInquiry: "",
//   });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Thực hiện xác thực tại đây
    if (validateForm()) {
      // Xử lý khi gửi form ở đây
      console.log(formData);
    }
  };

  const validateForm = () => {
    // Xác thực và cập nhật trạng thái lỗi
    const newErrors = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      subjectMessage: "",
      yourInquiry: "",
    };

    // Thực hiện xác thực tùy thuộc vào yêu cầu của bạn
    // Ở đây là ví dụ đơn giản chỉ kiểm tra trường trống
    // if (formData.firstName.trim() === "") {
    //   newErrors.firstName = "Trường này là bắt buộc";
    // }

    // Thêm các kiểm tra khác tương tự cho các trường khác

    // setErrors(newErrors);

    // Trả về true nếu không có lỗi, ngược lại trả về false
    return Object.values(newErrors).every((error) => error === "");
  };

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      <div className="first-name-fields">
        <div>
          <input
            type="text"
            name="firstName"
            className="rectangle-1"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First name"
          />
        </div>
      </div>

      <div className="last-name-fields">
        <div>
          <input
            type="text"
            name="lasstName"
            className="rectangle-2"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="email-fields">
        <div>
          <input
            type="text"
            name="emailAddress"
            className="rectangle-3"
            onChange={handleChange}
            value={formData.emailAddress}
            placeholder="Email address"
          />
        </div>
      </div>

      <div className="subject-fields">
        <div>
          <input
            type="text"
            name="subjectMessage"
            className="rectangle-4"
            onChange={handleChange}
            value={formData.subjectMessage}
            placeholder="Subject message"
          />
        </div>
      </div>

      <div className="inquiry-fields">
        <div>
          {/* <input
            type="text"
            name="yourInquiry"
            className="your-inquiry-here"
            onChange={handleChange}
            value={formData.yourInquiry}
            placeholder="Your inquiry here"
          /> */}
          <textarea
            // className="your-inquiry-here"
            className="rectangle-5"
            name="yourInquiry"
            placeholder="Your inquiry here"
            // style="height:200px"
            // value={formData.yourInquiry}
          ></textarea>
        </div>
        {/* {errors.firstName && (
          <div className="error-message">{errors.yourInquiry}</div>
        )} */}
      </div>

      <div className="send-message-button">
        <button type="submit">
          <div className="button-bg"></div>
          <div className="send-message">Send Message</div>
        </button>
      </div>
    </form>
  );
};

export default SiteFormContactUs;
