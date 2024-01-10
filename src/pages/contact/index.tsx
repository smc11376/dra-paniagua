// @ts-nocheck
import {contactConfig, meta} from "@/content_option";
import {SyntheticEvent, useEffect, useState} from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import "./style.css";
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es-ES', es)
import 'react-datepicker/dist/react-datepicker.css';
import {getExcludedDates, isTuesday} from "@/utils/dates.ts";
import {isThursday} from "date-fns";

type FormDataType = {
  email: string
  name: string
  message: string
  loading: boolean
  show: boolean
  alertMessage: string
  variant: string
}

export const ContactUs = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [excludedDates, setExcludedDates] = useState<Date[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  useEffect(() => {
    refreshExcludedDates(new Date())
  }, []);

  useEffect(() => {
    refreshExcludedDates(selectedDate)
  }, [selectedDate]);

  function refreshExcludedDates(date) {
    if (date) {
      const yearSelected = date.getFullYear()
      const monthSelected = date.getMonth()
      const dates = getExcludedDates(yearSelected, monthSelected)
      setExcludedDates(dates)
    }
  }

  function handleOnChangeDate(newDate: Date | null) {
    if (!newDate) {
      setSelectedDate(null)
    } else {
      if(excludedDates.includes(newDate)) setSelectedDate(null)
      else setSelectedDate(newDate)
    }
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormData(state => ({ ...state, loading: true }));
  };

  const handleChange = (e: SyntheticEvent) => {
    // @ts-ignore
    setFormData(state => ({
      ...state,
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Reservas</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Reservas</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <div>
            <DatePicker
              showIcon
              dateFormat="dd/MM/yyyy"
              selected={selectedDate}
              onChange={handleOnChangeDate}
              onMonthChange={refreshExcludedDates}
              adjustDateOnChange
              excludeDates={excludedDates}
              locale="es-ES"
              minDate={new Date()}
              placeholderText="Selecciona una fecha"
            />
          </div>
        </Row>
        {isTuesday(selectedDate) && (
          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                //show={formData.show}
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormData(state => ({ ...state, show: false }))}
                dismissible
              >
                <p className="my-0">{formData.alertMessage}</p>
              </Alert>
            </Col>
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">Health & Smile</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                  </p>
                ) : (
                  ""
                )}
              </address>
              <p>{contactConfig.description}</p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        )}
        {isThursday(selectedDate) && (
          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                //show={formData.show}
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormData(state => ({ ...state, show: false }))}
                dismissible
              >
                <p className="my-0">{formData.alertMessage}</p>
              </Alert>
            </Col>
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">Blue healthcare</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                  </p>
                ) : (
                  ""
                )}
              </address>
              <p>{contactConfig.description}</p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              Work in progress
            </Col>
          </Row>
        )}
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
