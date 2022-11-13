import React, { useContext } from "react";
import { Marginer } from "../marginer";
import './Form.css';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>


      <select className="form-select" name="Location" >
            <option value="">Location</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="">Bihar</option>
            <option value="">Chhattisgarh</option>
            <option value="">Goa</option>
            <option value="">Gujarat</option>
            <option value="">Haryana</option>
            <option value="">Himachal Pradesh</option>
            <option value="">Jharkhand</option>
            <option value="">Karnataka</option>
            <option value="">Kerala</option>
            <option value="">Madhya Pradesh</option>
            <option value="">Maharashtra</option>
            <option value="">Manipur</option>
            <option value="">Meghalaya</option>
            <option value="">Mizoram</option>
            <option value="">Nagaland</option>
            <option value="">Odisha</option>
            <option value="">Punjab</option>
            <option value="">Rajasthan</option>
            <option value="">Sikkim</option>
            <option value="">Tamil Nadu</option>
            <option value="">Telangana</option>
            <option value="">Tripura</option>
            <option value="">Uttar Pradesh</option>
            <option value="">West Bengal</option> 
          </select>


      <select className="form-select" name="Location" placeholder="Shop Types" >
            <option value="">Shop types</option>
            <option value="">Grocery</option>
            <option value="">Pharmacy</option>
            <option value="">Stationary</option>
            </select>


            <select className="form-select" name="" >
            <option value="">Language</option>
            <option value="Andhra Pradesh">English</option>
            <option value="">Hindi</option>
            <option value="">Marathi</option>
            <option value="">Gujarati</option>
            <option value="">Bengali</option>
            <option value="">Tamil</option>
            </select>


        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
