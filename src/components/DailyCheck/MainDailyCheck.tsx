import * as React from 'react';
import { css } from "@emotion/react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//アイコン
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import WomanIcon from '@mui/icons-material/Woman';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

const classes = {
    card:css`
        margin: 0 auto;
        opacity: 0.9;
    `,
    textFieldBox:css`
        justify-content: center;
        margin-bottom: 30px;
    `,
    TextField:css`
        width: 80%;
    `,
    labelTitle:css`
        margin-left: 20px;
        display: flex;
    `,
    formControl:css`
        display: flex;
    `,
    radioGroup:css`
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    `,
    buttonBox:css`
        margin-top: 30px;
        justify-content: space-around;
    `,
    button:css`
        width: 80%;
    `
}


const MainDailyCheck = () => {
    const formatDate = (dt: any) => {
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth()+1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
      }
    

    return (
        <div style={{padding: "0 5%"}}>

        <Card css={classes.card} sx={{ width: "100%" ,padding: "5% 10% 10% 10%"}}>

            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    {formatDate(new Date())}
                </Typography>
            </CardContent>

            
            
            <Box css={classes.textFieldBox} sx={{ display: 'flex', alignItems: 'flex-end', width: "50%", ml:3 }}>
                <MonitorWeightIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField css={classes.TextField} id="input-with-sx" label="体重(kg)" variant="standard" />
            </Box>

            <Box css={classes.textFieldBox} sx={{ display: 'flex', alignItems: 'flex-end', width: "50%", ml:3}}>
                <DeviceThermostatIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField css={classes.TextField} id="input-with-sx" label="体温(度)" variant="standard" />
            </Box>

            <FormControl css={classes.formControl} sx={{mt: 10}}>
                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><RiceBowlIcon />食事量</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="少ない"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="普通"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top3"
                control={<Radio />}
                label="多い"
                labelPlacement="top"
                />
                </RadioGroup>

                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><TagFacesIcon />体調</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="悪い"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="普通"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top3"
                control={<Radio />}
                label="良い"
                labelPlacement="top"
                />
                </RadioGroup>

                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><PregnantWomanIcon />お腹の調子</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="悪い"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="普通"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top3"
                control={<Radio />}
                label="良い"
                labelPlacement="top"
                />
                </RadioGroup>
                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><CleanHandsIcon />肌の調子</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="悪い"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="普通"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top3"
                control={<Radio />}
                label="良い"
                labelPlacement="top"
                />
                </RadioGroup>
                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><WomanIcon />生理</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="なし"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="生理中"
                labelPlacement="top"
                />
                </RadioGroup>
                <FormLabel css={classes.labelTitle} id="demo-form-control-label-placement"><BabyChangingStationIcon />便</FormLabel>
                <RadioGroup
                    sx={{width: "60%", margin: "10px auto"}}
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    css={classes.radioGroup}
                >
                <FormControlLabel
                value="top"
                control={<Radio />}
                label="少ない"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top2"
                control={<Radio />}
                label="普通"
                labelPlacement="top"
                />
                <FormControlLabel
                value="top3"
                control={<Radio />}
                label="多い"
                labelPlacement="top"
                />
                </RadioGroup>
            </FormControl>


            <CardActions css={classes.buttonBox}>
                <Button css={classes.button} variant="contained">保存</Button>
            </CardActions>
        </Card>
        </div>
    );
}

export default MainDailyCheck;