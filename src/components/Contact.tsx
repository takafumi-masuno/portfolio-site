import { Link, Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Box, Text } from "rebass";
import styled from "styled-components";
import { StyledBox } from "./Home";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import PostSnackbar from "./Snackbar";

const MailAvater = styled(Avatar)`
  background-color: #4caf50;
  color: #fff;
`;

const TwitterAvater = styled(Avatar)`
  background-color: #2196f3;
`;

const SendButton = styled(Button)`
  margin-top: 25px;
  font-weight: bold;
  color: white;
  background-color: black;
  &:hover {
    font-weight: bold;
    color: #ffdc2e;
    background-color: black;
    opacity: 0.8;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const Contact = () => {
  const [serverState, setServerState] = useState({ ok: false, msg: "" });

  const formSchema = Yup.object({
    name: Yup.string().required("*必須項目です。入力してください。"),
    email: Yup.string()
      .email("無効なメールアドレスです")
      .required("*必須項目です。入力してください。"),
    company: Yup.string(),
    title: Yup.string().required("*必須項目です。入力してください。"),
    message: Yup.string().required("*必須項目です。入力してください。"),
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = async (
    values: any,
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void }
  ) => {
    try {
      await axios({
        method: "POST",
        url: "https://formspree.io/f/mpzbljbv",
        data: values,
      });

      actions.setSubmitting(false);
      actions.resetForm();
      handleServerResponse(
        true,
        "ありがとうございます。お問い合わせを受け付けました。"
      );
    } catch (err) {
      actions.setSubmitting(false);
      handleServerResponse(
        false,
        "送信に失敗しました。恐れ入りますが、もう一度お送りください。"
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <Box p={2}>
      <StyledBox>
        <Text as="h1">Contact</Text>
      </StyledBox>
      <StyledBox
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "gainsboro",
          width: "470px",
          margin: "20px auto 40px",
          padding: "50px 0",
        }}
      >
        <form
          style={{ width: "350px" }}
          id="fs-frm"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {serverState && serverState.ok && (
            <PostSnackbar
              message={serverState.msg}
              backgroundColor="#00cdf5"
              color="black"
            />
          )}
          <div
            style={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <StyledTextField
              fullWidth
              id="name"
              name="name"
              label="お名前 *"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={
                formik.touched.name
                  ? formik.errors.name
                  : Boolean(formik.values.name)
                  ? ""
                  : "お名前を入力してください。"
              }
            />
            <StyledTextField
              fullWidth
              id="email"
              name="email"
              label="メールアドレス *"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email
                  ? formik.errors.email
                  : Boolean(formik.values.email)
                  ? ""
                  : "メールアドレスを入力してください。"
              }
            />
            <StyledTextField
              fullWidth
              id="company"
              name="company"
              label="会社名"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={
                formik.touched.company
                  ? formik.errors.company
                  : Boolean(formik.values.company)
                  ? ""
                  : "会社名を入力してください。"
              }
            />
            <StyledTextField
              fullWidth
              id="title"
              name="title"
              label="件名 *"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={
                formik.touched.title
                  ? formik.errors.title
                  : formik.values.title
                  ? ""
                  : "件名を入力してください。"
              }
            />
            <StyledTextField
              fullWidth
              id="message"
              name="message"
              label="内容 *"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={
                formik.touched.message
                  ? formik.errors.message
                  : formik.values.message
                  ? ""
                  : "お問い合わせ内容を入力してください。"
              }
              multiline
              maxRows={10}
            />
            <SendButton
              variant="contained"
              fullWidth
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "送信中..." : "送信"}
            </SendButton>
            {serverState && !serverState.ok && serverState.msg !== "" && (
              <PostSnackbar
                message={serverState.msg}
                backgroundColor="#ff7d5b"
                color="default"
              />
            )}
          </div>
        </form>
      </StyledBox>
      <StyledBox>
        <Link href="mailto:masuno.official@gmail.com" style={{ margin: "8px" }}>
          <MailAvater>
            <MailIcon />
          </MailAvater>
        </Link>
        <Link
          href="https://twitter.com/engineer_masuno"
          target="_blank"
          rel="noopener noreferrer external"
          style={{ margin: "8px" }}
        >
          <TwitterAvater>
            <TwitterIcon />
          </TwitterAvater>
        </Link>
        <Link
          href="https://github.com/takafumi-masuno"
          target="_blank"
          rel="noopener noreferrer external"
          style={{ margin: "8px" }}
        >
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </Link>
      </StyledBox>
    </Box>
  );
};

export default Contact;
