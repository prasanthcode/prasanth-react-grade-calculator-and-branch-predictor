import React from "react";

export default function Faq() {
  return (
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">What is Lorem Ipsum?</div>
        <div class="icon-container">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div class="faq-answer">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
                      </p>
      </div>
      <div class="faq-item">
        <div class="faq-question">Why do we use it?</div>
        <div class="icon-container">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div class="faq-answer">
        <p>To fill the blank elements on the page.</p>
        <table>
          <thead>
            <tr>
              <th>Grades</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>90-100</td>
            </tr>
            <tr>
              <td>B</td>
              <td>80-89</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="faq-item">
        <div class="faq-question">Where can I get some?</div>
        <div class="icon-container">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div class="faq-answer">
        <p>
          There are many variations of passages of Lorem Ipsum available, but i
          use lipsum.com.
        </p>
      </div>
    </div>
  );
}
