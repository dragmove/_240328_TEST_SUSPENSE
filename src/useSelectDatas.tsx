import { useEffect } from "react";

export default function useSelectDatas({ world, season, lastSelectedWorldName, navigationType }) {
    console.log('navigationType :', navigationType);

    useEffect(() => {
        console.log('[useSelectDatas] world :', world);

        if(world) {
            let worldVal;

            if(!isInitialized) {
                const world = getWorldById(worlds, world);
                worldVal = world.id;

            } else {
                if (navigationType === 'PUSH') {
                    // 셀렉트 선택 (setSelectedWorldName)
                    world = getWorldByName(worlds, lastSelectedWorldName) ?? worlds[0];
                    worldVal = world.id;
    
                } else if (navigationType === 'POP') {
                    // 브라우저 앞/뒤 이동
                    const world = getWorldById(worlds, world);
                    worldVal = world.id;
                    setLastSelectedWorldName(world.name); // 여기서 lastSelectedWorldName 도 설정
                }
            }
        } else {
            // setWorldId
            // setLastSelectedWorldName
        }
    }, [worlds, world]);

    return {
        foo: 'foo'
    }
  }