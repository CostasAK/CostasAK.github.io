import {
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  forwardRef,
} from "@chakra-ui/react";

import { ContentsIcon } from "assets/contents";

export const ContentsButton = forwardRef(({ sections }, ref) => {
  return (
    <Menu>
      <Tooltip label="Contents">
        <MenuButton
          as={IconButton}
          size=""
          p="3px 4px"
          icon={<Icon boxSize="32px" as={ContentsIcon} />}
          aria-label="Table of Contents"
        />
      </Tooltip>
      <MenuList>
        {sections &&
          sections.map((section, index) => (
            <MenuItem
              key={index}
              as={Link}
              href={"#" + section.name.toLowerCase().replace(" ", "-")}
              _hover={{ textDecoration: "none" }}
            >
              {section.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
});
