"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteInputLinkProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteInputLinkProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2">
        <Copy className="size-5" onClick={copyInviteLink} />
      </IconButton>
    </InputRoot>
  );
}
