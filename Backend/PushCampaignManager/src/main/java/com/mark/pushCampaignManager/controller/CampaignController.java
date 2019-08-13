package com.mark.pushCampaignManager.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mark.pushCampaignManager.entity.CampaignEntity;
import com.mark.pushCampaignManager.exceptions.ResourceNotFoundException;
import com.mark.pushCampaignManager.repository.CampaignRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class CampaignController {
	
	@Autowired
    CampaignRepository campaignRepository;
	
	//Get All Campaigns
	@GetMapping("/campaigns")
	public Iterable<CampaignEntity> getAllCampaigns(){
		return campaignRepository.findAll();
	}
	
//	Create New Campaign 
	@PostMapping("/add")
	public CampaignEntity createCampaign(@Valid @RequestBody CampaignEntity campaginEntity) {
		System.out.println(campaginEntity);
		return campaignRepository.save(campaginEntity);
		
	}
	
	
	//Get Single Campaign
	@GetMapping("/campaigns/{id}")
	public ResponseEntity <CampaignEntity> getCampaignById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
		CampaignEntity campaignEntity = campaignRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(null, null, "Campaign not found on :: " + id));
			    return ResponseEntity.ok().body(campaignEntity);
	   
	}
	
	//Update Campaign - not finished
//	@PutMapping("/updateCampaign/{id}")
//	public CampaignEntity updateCampaign(@PathVariable(value = "id") Long id,
//	             @Valid @RequestBody CampaignEntity campaignEntity) {
//
//	    Note note = noteRepository.findById(noteId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));
//
//	    note.setTitle(noteDetails.getTitle());
//	    note.setContent(noteDetails.getContent());
//
//	    Note updatedNote = noteRepository.save(note);
//	    return updatedNote;
	
	//Delete Campaign - not finished
//	@DeleteMapping("/notes/{id}")
//	public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long noteId) {
//	    Note note = noteRepository.findById(noteId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));
//
//	    noteRepository.delete(note);
//
//	    return ResponseEntity.ok().build();
//	}
}
