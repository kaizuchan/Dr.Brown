import { css } from "@emotion/react";
import { Button, FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Layout from "./Layout/Layout";

const pageProps = {
  name: "撮影診断",
  desc: "あなたのブラウン君から健康状態を調べるよ",
  bgImg: "url('./bgImg/hospital.jpg')",
};

const BrownResult: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <Layout
      siteName={pageProps.name}
      desc={pageProps.desc}
      bgDesign={pageProps.bgImg}
    >
      <div css={classes.container}>
        <h1>どんな特徴でしたか？</h1>
        <div css={classes.contents}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ padding: 5 }}>
              <FormLabel
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  background: "#c6e3f6",
                  p: "5px 0",
                  pl: 3,
                  borderRadius: "20px 20px 0 0",
                }}
              >
                色
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="color"
                name="color"
                sx={{ mb: 3 }}
              >
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 }, pl: 5 }}
                  value="黄褐色"
                  control={
                    <Radio
                      sx={{
                        color: "#ad7d4e",
                        "&.Mui-checked": { color: "#ad7d4e" },
                      }}
                    />
                  }
                  label="黄褐色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="黄色"
                  control={
                    <Radio
                      sx={{
                        color: "#ffd900",
                        "&.Mui-checked": { color: "#ffd900" },
                      }}
                    />
                  }
                  label="黄色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="茶色"
                  control={
                    <Radio
                      sx={{
                        color: "#965042",
                        "&.Mui-checked": { color: "#965042" },
                      }}
                    />
                  }
                  label="茶色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="褐色"
                  control={
                    <Radio
                      sx={{
                        color: "#a52a2a",
                        "&.Mui-checked": { color: "#a52a2a" },
                      }}
                    />
                  }
                  label="褐色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="黒色"
                  control={
                    <Radio
                      sx={{
                        color: "#251c12",
                        "&.Mui-checked": { color: "#251c12" },
                      }}
                    />
                  }
                  label="黒色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="赤色"
                  control={
                    <Radio
                      sx={{ color: "#f00", "&.Mui-checked": { color: "#f00" } }}
                    />
                  }
                  label="赤色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="緑色"
                  control={
                    <Radio
                      sx={{
                        color: "#285b41",
                        "&.Mui-checked": { color: "#285b41" },
                      }}
                    />
                  }
                  label="緑色"
                />
                <FormControlLabel
                  {...register("brown-color")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                  value="灰白色"
                  control={
                    <Radio
                      sx={{
                        color: "#e9e4d4",
                        "&.Mui-checked": { color: "#e9e4d4" },
                      }}
                    />
                  }
                  label="灰白色"
                />
              </RadioGroup>

              <FormLabel
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  background: "#c6e3f6",
                  p: "5px 0",
                  pl: 3,
                  borderRadius: "20px 20px 0 0",
                }}
              >
                量
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="color"
                name="color"
                sx={{ mb: 3 }}
              >
                <FormControlLabel
                  {...register("brown-volume")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, pl: 5 }}
                  value="少ない"
                  control={<Radio />}
                  label="少ない"
                />
                <FormControlLabel
                  {...register("brown-volume")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="やや少ない"
                  control={<Radio />}
                  label="やや少ない"
                />
                <FormControlLabel
                  {...register("brown-volume")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="普通"
                  control={<Radio />}
                  label="普通"
                />
                <FormControlLabel
                  {...register("brown-volume")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="やや多い"
                  control={<Radio />}
                  label="やや多い"
                />
                <FormControlLabel
                  {...register("brown-volume")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="多い"
                  control={<Radio />}
                  label="多い"
                />
              </RadioGroup>

              <FormLabel
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  background: "#c6e3f6",
                  p: "5px 0",
                  pl: 3,
                  borderRadius: "20px 20px 0 0",
                }}
              >
                臭い
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="color"
                name="color"
                sx={{ mb: 3 }}
              >
                <FormControlLabel
                  {...register("brown-odor")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, pl: 5 }}
                  value="臭い"
                  control={<Radio />}
                  label="臭い"
                />
                <FormControlLabel
                  {...register("brown-odor")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="やや臭い"
                  control={<Radio />}
                  label="やや臭い"
                />
                <FormControlLabel
                  {...register("brown-odor")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="やや臭くない"
                  control={<Radio />}
                  label="やや臭くない"
                />
                <FormControlLabel
                  {...register("brown-odor")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="臭くない"
                  control={<Radio />}
                  label="臭くない"
                />
              </RadioGroup>

              <FormLabel
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  background: "#c6e3f6",
                  p: "5px 0",
                  pl: 3,
                  borderRadius: "20px 20px 0 0",
                }}
              >
                残量感
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="color"
                name="color"
                sx={{ mb: 3 }}
              >
                <FormControlLabel
                  {...register("brown-neatness")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, pl: 5 }}
                  value="ある"
                  control={<Radio />}
                  label="ある"
                />
                <FormControlLabel
                  {...register("brown-neatness")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="ややある"
                  control={<Radio />}
                  label="ややある"
                />
                <FormControlLabel
                  {...register("brown-neatness")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  value="すっきり"
                  control={<Radio />}
                  label="すっきり"
                />
              </RadioGroup>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{ width: "200px", fontWeight: "bold" }}
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    router.push("/BrownFinal");
                  }}
                >
                  スコアを確認する
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BrownResult;

const classes = {
  container: css`
    background-color: #ffffffcc;
    width: 100%;
    height: 80%;

    h1 {
      font-size: 2rem;
      padding: 5% 5% 0;
    }
  `,
  contents: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 420px) {
      margin-bottom: 70px;
    }
  `,
};
