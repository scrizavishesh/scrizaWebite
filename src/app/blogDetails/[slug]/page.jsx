'use client'

import toast from "react-hot-toast";
import { CircularProgress, styled } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ViewBlog = ({ params }) => {
  const { slug } = params;
  const BASE_URL = 'http://192.168.20.156:5000/';

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getBlogsBySlug = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/blogs/${slug}`, {
          withCredentials: true
        });
        setData(response?.data);
        setIsLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
        setIsLoading(false);
      }
    };
    getBlogsBySlug();
  }, []);

  if (isLoading || !data) {
    return (
      <BlogMainContainer  style={{ alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </BlogMainContainer>
    );
  }

  return (
   <>
      <Header/>
    <BlogMainContainer >
      <Breadcrumb>
        Blog / <BlogSpan>{data?.title}</BlogSpan>
      </Breadcrumb>

      <Title>{data?.title}</Title>

      <BlogImage
        src={`${BASE_URL}${data?.featureImage}`}
        alt={data?.title}
      />

      <BlogMeta>
        <MetaItem>
          <CalendarMonthOutlinedIcon />
          <MetaText>{new Date(data.createdAt).toLocaleDateString()}</MetaText>
        </MetaItem>
        <MetaItem>
          <PersonOutlineOutlinedIcon />
          <MetaText>{data?.author?.name}</MetaText>
        </MetaItem>
        <MetaItem>
          <AutoStoriesOutlinedIcon />
          <MetaText>{data?.category?.name}</MetaText>
        </MetaItem>
      </BlogMeta>

      <BlogContent>
        <Content>
          {data?.content?.split("\n").map((line, idx) => {
            const isQuestion = line.trim().endsWith("?");
            return (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <span
                  style={
                    isQuestion
                      ? {
                          backgroundColor: "#e0f7fa",
                          padding: "4px 8px",
                          borderRadius: "5px",
                          fontWeight: 600
                        }
                      : {}
                  }
                >
                  {line}
                </span>
              </div>
            );
          })}
        </Content>
      </BlogContent>
    </BlogMainContainer>
      <Footer/>
   </>
  );
};

export default ViewBlog;

// -------------------- Styled Components --------------------

const BlogMainContainer = styled("div")`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 600px) {
    width: 100vw;
    padding: 16px;
  }
`;

const Breadcrumb = styled("p")`
  font: 600 17px Montserrat;
  color: #0f172a;
`;

const BlogSpan = styled("span")`
  font: 400 16px Montserrat;
  color: #64748b;
`;

const Title = styled("h1")`
  font: 700 28px Montserrat;
  color: #0f172a;
  margin-bottom: 10px;
`;

const BlogImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const BlogMeta = styled("div")`
  display: flex;
  gap: 30px;
  padding: 16px;
  background: #f1f5f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MetaItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MetaText = styled("p")`
  font: 400 16px Montserrat;
  color: #475569;
`;

const BlogContent = styled("div")`
  width: 90%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled("div")`
  font: 400 18px Georgia, serif;
  color: #1e293b;
  line-height: 1.9;
  word-spacing: 2px;
  letter-spacing: 0.4px;
  white-space: pre-wrap;
`;
