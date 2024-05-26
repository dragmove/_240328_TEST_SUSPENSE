import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useGlobalStore } from "@/store";
import useSelectDatas from "@/useSelectDatas";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useNavigationType, useSearchParams } from "react-router-dom";
import { URLSearchParams } from "url";
import '../index.css';
import ButtonCtrl from "@/lib/buttonCtrl";
import Cursor from "@/lib/cursor";

// @see https://nikitahl.com/circle-progress-bar-css
export default function Root() {
    const getSearchParamsAll = (params: URLSearchParams) => Object.fromEntries([...params]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const navigationType = useNavigationType();

    // @see https://tympanus.net/Development/MagneticButtons/index4.html
    const cursorRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const cursor = new Cursor(cursorRef?.current);
        const button = new ButtonCtrl(btnRef?.current);

        button.on('enter', () => cursor.enter());
        button.on('leave', () => cursor.leave());
    }, [])
    
    return <>
        <svg className="cursor" width="25" height="25" viewBox="0 0 25 25" ref={cursorRef}>
			<circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
		</svg>
        
        <div className="content">
            <button className="button" ref={btnRef}>
                <div className="button__filler"></div>
                <span className="button__text">
                    <span className="button__text-inner">Watch</span>
                </span>
            </button>
        </div>

        
    </>
    

    /*
    // progress loading
    const progressStyle: CSSProperties = {
        visibility: 'hidden',
        height: 0,
        width: 0
    }

    // return <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
    return <div className="progress-bar">
        <progress value={75} max={100} style={progressStyle}>75%</progress>
    </div>
    */

    /*
    // headless component
    const world = useGlobalStore((state) => state.world);
    const setWorld = useGlobalStore((state) => state.setWorld);

    const [season, setSeason] = useState();

    const { foo } = useSelectDatas({ world, season, navigationType });

    const handleChangeWorld = (val) => {
        setWorld(val);

        // const season = searchParams.get('season') ?? ''
        setSearchParams({
            ...getSearchParamsAll(searchParams),
            world: val,
        });
    };
    const handleChangeSeason = (val) => {
        setSeason(val);

        // const world = searchParams.get('world') ?? ''
        setSearchParams({
            ...getSearchParamsAll(searchParams),
            season: val
        });
    };
    
    return (
        <div>
            <Button>Click Me</Button>

            <Select onValueChange={handleChangeWorld}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select world" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">사신수</SelectItem>
                    <SelectItem value="2">글로벌</SelectItem>
                    <SelectItem value="3">아랑</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={handleChangeSeason}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select season" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2">시즌 2</SelectItem>
                    <SelectItem value="1">시즌 1</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
    */
}