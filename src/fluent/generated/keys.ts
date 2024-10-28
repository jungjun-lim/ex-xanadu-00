import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '08696371f8f04682ab24af62f83c958f'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'cd7fe15ef4f749eaa14e4d961af68ba8'
                    }
                }
            }
        }
    }
}
