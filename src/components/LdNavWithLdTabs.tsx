import {
  LdSidenav,
  LdTab,
  LdTablist,
  LdTabs,
  LdTypo,
} from '@emdgroup-liquid/liquid/dist/react'

const LdNavWithLdTabs = () => {
  return (
    <LdSidenav open align="right" style={{ width: '60vw' }}>
      <LdTypo style={{ padding: '1rem' }} slot="top" variant="cap-l">
        The lorem ipsum
      </LdTypo>
      <LdTypo style={{ padding: '1rem' }}>
        <LdTabs>
          <LdTablist mode="ghost">
            <LdTab selected>General Info</LdTab>
            <LdTab>Parameters</LdTab>
            <LdTab>Change Log</LdTab>
          </LdTablist>
        </LdTabs>
      </LdTypo>
    </LdSidenav>
  )
}

export default LdNavWithLdTabs
